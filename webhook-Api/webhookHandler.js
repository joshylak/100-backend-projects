import crypto from "crypto";

function verifySignature(rawBody, signature, secret) {
    const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

return signature === expectedSignature;
}

export const handleWebhook = (req, res) => {
    const rawBody = req.rawBody;
    const payload = req.body;

  const signature = req.headers["x-webhook-signature"]; // optional header
    const secret = process.env.WEBHOOK_SECRET;

if (!verifySignature(rawBody, signature, secret)) {
    console.log("❌ Invalid signature");
    return res.status(401).send("Invalid signature");
    }

    console.log("✅ Webhook received:");
    console.log(JSON.stringify(payload, null, 2));


res.status(200).send("Webhook received");
};
