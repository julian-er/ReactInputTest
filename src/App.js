import React, { Component } from 'react'
import ValidationComponent from './Component/ValidationComponent'
import CharComponents from './Component/CharComponents'

export default class App extends Component {
  state = {

      title:'Escribe lo que quieras y cambiaré el párrafo, recuerda que sea mayor de 10 caracteres y menor que 20',
      body:'',
      lenght:''

}

changeTextHandler (event) {
    const someText = this.state;

    someText.body = event.target.value;

    someText.lenght = (this.state.body.split('')).length;


    this.setState({
      someText : someText
    })

    
}




deleteLetterHandler = (letterIndex) => {
  const letters = this.state.body.split('');
  letters.splice(letterIndex, 1);
  const updatedText = letters.join('');
  
  this.setState({ body : updatedText })

}

  render() {

    let allLetters = [...this.state.body]
    let letter = null

    if (this.state.lenght > 0) {
      

      letter = (
            <div>
              {allLetters.map((allLetters, index)=>{
                  return <CharComponents 
                            letter={allLetters} 
                            click={ () => this.deleteLetterHandler(index)}
                            />
                })}
            </div>

      )

    }



    return (
      <div>
         <input type="text" onChange={(event)=> this.changeTextHandler(event)} value={this.state.body}></input>
            <h1>{this.state.title}</h1>
            <p>{this.state.body}</p>
            <ValidationComponent check={this.state.lenght} />
            {letter}
      </div>
    )
  }
}

