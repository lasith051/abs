const { default: makeWASocket, useSingleFileAuthState, DisconnectReason } = require("@whiskeysockets/baileys");
const { Boom } = require("@hapi/boom");
const P = require("pino");

const { state, saveState } = useSingleFileAuthState("./auth_info.json");

async function startBot() {
    const sock = makeWASocket({
        logger: P({ level: "silent" }),
        printQRInTerminal: true,
        auth: state
    });

    sock.ev.on("creds.update", saveState);

    sock.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === "close") {
            const shouldReconnect = (lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut;
            if (shouldReconnect) {
                startBot();
            }
        } else if (connection === "open") {
            console.log("✅ Bot connected!");
        }
    });

    sock.ev.on("messages.upsert", async (m) => {
        const msg = m.messages[0];
        if (!msg.message || msg.key.fromMe) return;

        const sender = msg.key.remoteJid;
        const text = msg.message.conversation || msg.message.extendedTextMessage?.text || "";

        console.log("📩 Received:", text);

        if (text.toLowerCase() === "hi" || text.toLowerCase() === "hello") {
            await sock.sendMessage(sender, { text: "Hello! I’m Laka FX 🤖. How can I help you today?" });
        }

        if (text.toLowerCase() === "fx rate") {
            await sock.sendMessage(sender, { text: "💱 USD 1 = LKR 360 (sample rate)" });
        }

        if (text.toLowerCase() === "rate sinhala") {
            await sock.sendMessage(sender, { text: "💱 ඩොලර් 1 = රුපියල් 360 (උදාහරණයක් ලෙස)" });
        }
    });
}

startBot();
