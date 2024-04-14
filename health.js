function changeContent(page) {
	var contentDiv = document.getElementById('content');

	switch (page) {
		case 'Home':
			contentDiv.innerHTML = `
            <div class="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut officiis ratione praesentium quo maiores, modi reprehenderit pariatur ipsam eum vel tenetur sint, velit fuga quidem repellendus exercitationem? Ducimus nam quidem aspernatur velit cumque nemo, aliquid perspiciatis cum impedit provident vel omnis, dolorem sit, nisi facilis quibusdam doloremque. Assumenda, blanditiis.
            </p>
        <!-- <button (click)="navpage()">Apply For Trainer</button> -->
        <button class="btn">Apply For Trainer</button>
        </div>
    </div>
			`;
			break;
		case 'Place Appointment':
			contentDiv.innerHTML = `
				<h2>Place Appointment</h2>

			`;
			break;
            case 'View Appointment':
			contentDiv.innerHTML = `
				<h2>View Appointment</h2>

			`;
			break;
		case 'Contact us':
			contentDiv.innerHTML = 
				`<h2></h2> 
				<form> 
				<label for="name">Name:</label> 
				<input type="text" id="name" name="name" 
						placeholder="Your Name" required>
				<label for="email">Email:</label> 
				<input type="email" id="email" name="email" 
						placeholder="Your Email" required>
				<label for="message">Message:</label> 
				<textarea id="message" name="message" 
							placeholder="Your Message" 
							rows="4" required>
					</textarea>
				<button type="submit">Send Message</button> 
				</form>`;
			break;
            
default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}
