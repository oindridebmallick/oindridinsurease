function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function () {
        const output = document.getElementById('preview-pic');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    document.getElementById('user-name').innerText = name;

    document.getElementById('verification-status').innerHTML = "Verification Status: <span class='pending'>Pending Review</span>";

    alert('Profile updated successfully!');
});
