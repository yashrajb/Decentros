import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filterText';
import axios from 'axios';
import {Header,styles,Navbar} from './Header'
import Result from './Result';


export class ApiFilters extends React.Component {

  state = {
  currency:[]
}




  
  

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSubmit = (e) => {

    e.preventDefault();

    console.log(e);

    axios.get(`https://api.coinmarketcap.com/v1/ticker/${this.props.text.text}/?limit=1`)
      .then((response) => {
        if (response.status === 200) {

          this.setState({
            currency:response.data
          });
          
        }

      }).catch((e) => {
        this.setState({
          currency:null
        })
      });
  }


  render() {

      

      

      return (

        <div>
            <Navbar/>
        
       <div className="container main-el" style={styles.h1}>
       <Header/>
       <div className="form-row">

                  <div className="col-11">
                        <input
                          type="text"
                          value={this.props.text.text}
                          onChange={this.onTextChange}
                          className="form-control"
                          placeholder="default value is bitcoin"
                        />
                  </div>

                   <div className="col-1">
                  <input type="submit"
                      onClick={this.onSubmit}
                      className="btn btn-default"
                      />
          </div>
              </div>


              
      
         
        


     <div className="form-row">
        <div className="col text-center">
          <Result currency={this.state.currency} error={this.state.error}/>
        </div>
    </div>



       </div>


      

    </div>
    
  
        
          
     
    );


    
    
  }
};



const mapStateToProps = (state) => ({
 text: state.text
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(ApiFilters);