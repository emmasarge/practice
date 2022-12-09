import './App.css';
import './script';
import './post';



function App() {
  return (
    <div className="App">
			<form id="reset-pw-form">
					<input id="rest-pw-email" type="email" placeholder="email" />
					<button id="reset-pw-btn">submit</button>
			</form><div id="reset-pw-response"></div>

      <form   id="new-pw-form" >
        <label>New passworrd</label>
					<input id="new-pw-email" type="password" name="password"  required  placeholder="password" />
          <label>confirm password</label>
          <input id="new-pw-email-confirm" name="confirmPassword" required type="password" placeholder="confirm password" />
					<button id="new-pw-btn" >submit</button>
			</form><div id="new-pw-response"></div>
      
    </div>
  );

  
}

export default App;
