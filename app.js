function orderDiamond(amount) {
    const gameIdInput = document.getElementById(`gameId${amount === 500 ? '500' : ''}`);
    const gameId = gameIdInput.value;
    const messageDiv = document.getElementById('message');

    if (gameId === "") {
        messageDiv.innerText = "Silakan masukkan ID Game Anda.";
        return;
    }

    // Simulasi pesan sukses
    messageDiv.innerText = `Pembelian ${amount} diamond untuk ID ${gameId} berhasil!`;
}
