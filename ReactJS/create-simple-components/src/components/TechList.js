import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component{

  // para definir as defaultProps de uma class:
  // static defaultProps = { tech: 'Oculto' };
  // para definir as PropTypes de uma class:
  // static PropTypes = { };
  state = {
    newTech: '',
    techs: []
  };

  // Executado assim que o componente aparece no ecrã
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if( techs ) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executado sempre que houver alterações nas props ou estado
  // componentDidUpdate(prevProps, prevState) {
    // Não utilizo o prevProps, posso colocar _
    componentDidUpdate(_, prevState) {
    // this.props, this.state
    if(prevState.techs !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  // Executado quando o componente deixar de existir
  componentWillUnmount() {
  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value});
  }

  handleSubmit = e => {
    // para quando carregamos no submit, não fazer o REFRESH da página, por default
    e.preventDefault();
    
    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech)})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
          <TechItem 
            key={tech} 
            tech={tech} 
            onDelete={() => this.handleDelete(tech)}
          />
          ))}
        </ul>
        <input 
        type="text" 
        onChange={this.handleInputChange} 
        value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;