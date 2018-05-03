import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filterText';
import axios from 'axios';
import {Header,styles,Navbar} from './Header'
import Result from './Result';


export class ApiFilters extends React.Component {

  state = {
  currency:[],
  error:''
}




  
  

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSubmit = (e) => {

    e.preventDefault();

    if(this.props.text.text==="" || this.props.text.text===null){


      this.setState({
        currency:[],
        error:'Please give some input.'
      })


    }else {




      axios.get(`https://api.coinmarketcap.com/v1/ticker/${this.props.text.text}/?limit=1`)
      .then((response) => {
        if (response.status === 200) {

          this.setState({
            currency:response.data,
            error:''
          });
          
        }

      }).catch((e) => {
        this.setState({
          currency:null,
          error:'Something happened wrong'
        })
      });




    }

    
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
                          placeholder="e.g - bitcoin,dash"
                        />
                  </div>

                   <div className="col-1">
                  <button
                      onClick={this.onSubmit}
                      className="btn btn-default"
                  >Submit</button>
               
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