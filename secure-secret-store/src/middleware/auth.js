import { verifyJWT } from '../auth.js';
import { db } from '../db.js';

export function requireAuth(req, res, next) {
  const hdr = req.headers.authorization || '';
  const token = hdr.startsWith('Bearer ') ? hdr.slice(7) : null;
  if (!token) return res.status(401).json({ success: false, error: 'Missing bearer token' });
  try {
    const payload = verifyJWT(token);
    req.user = { id: payload.sub, email: payload.email };
    next();
  } catch (e) {
    return res.status(401).json({ success: false, error: 'Invalid/expired token' });
  }
}

export function audit(action) {
  return (req, _res, next) => {
    req._audit = { action };
    next();
  };
}

export function persistAudit(req, res, next) {
  res.on('finish', () => {
    if (!req._audit) return;
    const details = {
      status: res.statusCode,
      method: req.method,
      path: req.originalUrl,
      bodyKeys: Object.keys(req.body || {})
    };
    db.prepare(`INSERT INTO audit_logs(id,user_id,action,subject_id,ip,user_agent,created_at,details)
                VALUES(?,?,?,?,?,?,?,?)`)
      .run(
        cryptoRandomId(),
        req.user?.id ?? null,
        req._audit.action,
        req._audit.subjectId ?? null,
        req.ip,
        req.headers['user-agent'] || null,
        new Date().toISOString(),
        JSON.stringify(details)
      );
  });
  next();
}

function cryptoRandomId() {
  return [...crypto.getRandomValues(new Uint8Array(16))].map(b => b.toString(16).padStart(2,'0')).join('');
}
