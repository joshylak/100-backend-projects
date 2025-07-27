    let socket;
    let docId = "";
    const editor = document.getElementById("editor");
    const saveBtn = document.getElementById("saveBtn");
    const connectBtn = document.getElementById("connectBtn");

    connectBtn.addEventListener("click", () => {
    docId = document.getElementById("docId").value.trim();
    if (!docId) return alert("Please enter a document ID");

    socket = io();

    socket.emit("join-document", docId);
    document.getElementById("status").innerText = "Connected to document " + docId;

    editor.disabled = false;
    saveBtn.disabled = false;

    socket.on("document-updated", (newContent) => {
        if (editor.value !== newContent) {
        editor.value = newContent;
        }
    });

    fetch(`/api/documents/${docId}`)
        .then(res => res.json())
        .then(doc => editor.value = doc.content || "")
        .catch(() => editor.value = "");
    });

    saveBtn.addEventListener("click", () => {
    if (!docId) return;
    const content = editor.value;

    socket.emit("edit-document", {
        docId,
        content
    });

    alert("Document saved!");
    });
