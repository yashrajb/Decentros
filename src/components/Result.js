//new file.js

import React from 'react';

class Result extends React.Component {



constructor(props){

super(props);

this.props = props;



}



render() {


const styles = {

h1:{
	color:"white"
},
main:{
	marginTop:30+"px"
}


}



if(this.props.error !== '') {

return (

	<div>
		<p style={styles.main} className="alert alert-danger">{this.props.error}</p>
	</div>


	)



}else if(this.props.currency.length === 0){


	return (

			<p>

			</p>
		);


}else {



return (

	<div style={styles.main}>
		<h1 style={styles.h1}>{this.props.currency[0].name}</h1>
		<p>Name :- {this.props.currency[0].name}</p>
		<p>Symbol :- {this.props.currency[0].symbol}</p>
		<p>Rank :- {this.props.currency[0].rank}</p>
		<p>Price :- {this.props.currency[0].price_usd}</p>
		<p>Percent change in 1 hour :- {this.props.currency[0].percent_change_1h}</p>
	</div>

	)




}





// if(this.props.currency.length !== 0 || this.props.error === ""){


// 	return (

// 		<div>
	
// 		</div>


// 		)


// }else{




// 	return (


// 		<div>
// 			<p>Something happened wrong!</p>
// 		</div>

// 		)





// }





}





}

export default Result;