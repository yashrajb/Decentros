import React from 'react';

export const styles = {
	h1:{
		fontFamily:'Roboto'
	},
	span:{
		color:"white",
		fontSize:2.1 + "em"
	}
}

export const Header = () => {

return (
	<div >
	<h1 className="text-center" style={styles.h1}>Decentros</h1>
	<p className="text-center" style={styles.h1}>Enter a cyrptocurrency to see price and other information</p>
</div>
);



}

export const Navbar = () => {


	return (


		<div>

			<ul className="nav justify-content-end">
		  		<li className="nav-item">
		    		<a className="nav-link" target="_blank" href="https://github.com/yashrajb"><span style={styles.span} className="fa fa-github"></span></a>
		  		</li>
		  		<li className="nav-item">
		    		<a className="nav-link" target="_blank" href="https://www.instagram.com/yashraj_basan/"><span style={styles.span} className="fa fa-instagram"></span></a>
		  		</li>
	       </ul>
				

		

		</div>

		);




}

