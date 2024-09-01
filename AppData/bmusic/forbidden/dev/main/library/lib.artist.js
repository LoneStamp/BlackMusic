// For Library Favorites the conatiner
function popupLibraryArtist() {
    document.getElementById(
        "popupOpenLibraryArtist"
    ).style.display = "block";
  }
  function closeLibraryArtist() {
    document.getElementById(
        "popupOpenLibraryArtist"
    ).style.display = "none";
  }
  
  /* Dragging Libaray Favorites */
  
  document.addEventListener('DOMContentLoaded', () => {
    const popups = document.querySelectorAll('.library-artist-local2');
  
    popups.forEach(popup => {
        let isDragging = false;
        let offsetX, offsetY;
  
        popup.addEventListener('mousedown', (e) => {
            // Start dragging
            isDragging = true;
  
            // Calculate the offset
            offsetX = e.clientX - popup.offsetLeft;
            offsetY = e.clientY - popup.offsetTop;
        });
  
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                // Prevent text selection while dragging
                e.preventDefault();
  
                // Move the pop-up
                popup.style.left = `${e.clientX - offsetX}px`;
                popup.style.top = `${e.clientY - offsetY}px`;
            }
        });
  
        document.addEventListener('mouseup', () => {
            // Stop dragging
            isDragging = false;
        });
    });
  });