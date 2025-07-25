    import express from "express";
    import bodyParser from "body-parser";
    import { exec } from "child_process";
    import crypto from "crypto";
    import dotenv from "dotenv";

    dotenv.config();

    const app = express();
    const PORT = process.env.PORT || 3000;
    const SECRET = process.env.WEBHOOK_SECRET;

    app.use(bodyParser.json({ verify: verifyGitHubSignature }));

    function verifyGitHubSignature(req, res, buf) {
    const signature = req.get("x-hub-signature-256");
    if (!signature) return;

    const hmac = crypto.createHmac("sha256", SECRET);
    hmac.update(buf);
    const digest = `sha256=${hmac.digest("hex")}`;

    if (signature !== digest) {
        throw new Error("Invalid signature.");
    }
    }

    app.post("/webhook", (req, res) => {
    const event = req.headers["x-github-event"];
    const repo = req.body.repository?.full_name;

    console.log(`[Webhook] Received ${event} from ${repo}`);

    if (event === "push") {
        exec("sh ./deploy.sh", (err, stdout, stderr) => {
        if (err) {
            console.error(`Deployment error: ${stderr}`);
            return res.status(500).send("Deployment failed.");
        }
        console.log(`Deployment Output: ${stdout}`);
        res.status(200).send("Deployed successfully.");
        });
    } else {
        res.status(200).send("Not a push event.");
    }
    });

    app.listen(PORT, () => {
    console.log(`CI/CD Webhook Service running on port ${PORT}`);
    });
