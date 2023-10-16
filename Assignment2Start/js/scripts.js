	// constants for query selector
	const customNumberInput = document.getElementById("customNumber");
        const custColorButton = document.querySelector(".custColor");
        const randColorButton = document.querySelector(".randColor");
        const imageSelect = document.getElementById("imageSelect");
        const images = document.getElementById("images");
        const studentId = "200530599"; 
	// function to change bg color from user input and add student id
		function changeCustomColor() 
		{
		const inputValue = customNumberInput.value;
            	const body = document.body;
            	if (inputValue < 0 || inputValue > 100) 
		{
                body.style.backgroundColor = "red";
                } 
		else if (inputValue >= 0 && inputValue <= 20) 
		{
                body.style.backgroundColor = "green";
            	} 
		else if (inputValue > 20 && inputValue <= 40) 
		{
                body.style.backgroundColor = "blue";
            	} 
		else if (inputValue > 40 && inputValue <= 60) 
		{
                body.style.backgroundColor = "orange";
            	} 
		else if (inputValue > 60 && inputValue <= 80) 
		{
                body.style.backgroundColor = "purple";
	        } 
		else if (inputValue > 80 && inputValue <= 100) 
		{
                body.style.backgroundColor = "yellow";
            	}

            	document.getElementById("myStudentId").textContent = `Student ID: ${studentId}`;
		}

// function to change bg color from random no.
function changeRandomColor() {
 	const randomValue = Math.floor(Math.random() * 100) + 1;
            customNumberInput.value = randomValue;
            changeCustomColor();
}

// function to generate options for select list
function addList() 
{
	
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
		const imageArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];  
                for (let i = 0; i < imageArray.length; i++) 
		{
                const option = document.createElement("option");
                option.value = imageArray[i];
                option.text = imageArray[i];
                imageSelect.appendChild(option);
            	}
}
// function to change image
function changeImage() 
{
 	     const selectedImage = imageSelect.value;
            images.src = `img/${selectedImage}`;
}

// event listeners for on click event of buttons and select
        custColorButton.addEventListener("click", changeCustomColor);
        randColorButton.addEventListener("click", changeRandomColor);
// event listeners for on change event of select
        imageSelect.addEventListener("change", changeImage);

addList();