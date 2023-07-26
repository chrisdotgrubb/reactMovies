import {useState} from 'react';

export default function LoginPage() {
	const defaultFormData = {
		name: '',
		password: '',
		error: '',
	};
	const [formData, setFormData] = useState(defaultFormData);
	// console.log(formData);
	function handleChange(evt) {
		setFormData({...formData, [evt.target.name]: evt.target.value, error: ''})
	}
	
	return (
		<div>
			<div className="form-container">
				<form autoComplete="off">
					<label>Name</label>
					<input type="text" name="name" value={formData.name} onChange={handleChange} autoComplete={'username'} required/>
					<label>Password</label>
					<input type="password" name="password" value={formData.password} onChange={handleChange} autoComplete={'current-password'} required/>
					<button type="submit">SIGN UP</button>
				</form>
			</div>
			<p className="error-message">&nbsp;{formData.error}</p>
		</div>
	);
}