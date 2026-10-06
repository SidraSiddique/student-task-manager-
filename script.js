* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f6f8;
    color: #333;
}

.container {
    width: 90%;
    max-width: 900px;
    margin: 40px auto;
}

header {
    text-align: center;
    margin-bottom: 30px;
}

header h1 {
    font-size: 36px;
    margin-bottom: 10px;
}

header p {
    color: #666;
}

.task-form,
.search-section {
    background: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.task-form h2 {
    margin-bottom: 15px;
}

input,
textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 15px;
}

textarea {
    min-height: 100px;
    resize: vertical;
}

button {
    border: none;
    padding: 11px 18px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 15px;
}

#addTaskBtn {
    background: #2563eb;
    color: white;
}

#addTaskBtn:hover {
    background: #1d4ed8;
}

.task-card {
    background: white;
    margin-bottom: 15px;
    padding: 18px;
    border-radius: 8px;
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
}

.task-card.completed {
    opacity: 0.65;
}

.task-card.completed h3 {
    text-decoration: line-through;
}

.task-card h3 {
    margin-bottom: 8px;
}

.task-card p {
    margin-bottom: 15px;
    color: #555;
}

.task-actions {
    display: flex;
    gap: 10px;
}

.complete-btn {
    background: #16a34a;
    color: white;
}

.delete-btn {
    background: #dc2626;
    color: white;
}

@media (max-width: 600px) {

    .container {
        width: 95%;
        margin: 20px auto;
    }

    header h1 {
        font-size: 28px;
    }

    .task-actions {
        flex-direction: column;
    }

    button {
        width: 100%;
    }
}