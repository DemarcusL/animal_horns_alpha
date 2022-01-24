import React from 'react'
import HornedBeast from './HornedBeasts'
import Card from 'react-bootstrap/Card';


class Main extends React.Component {

  render() {
    return(
      <div id="beast-container">


        <Card>
      {/* Lets use the values passed down and sort by index */}
        {this.props.allBeasts.map((beast, idx) => (
          <HornedBeast 
            key={idx}
            index={idx}
            src={beast.image_url}
            title={beast.title}
            description={beast.description}
            displayAsModal={this.props.displayAsModal}
          />
        ))}
        </Card>

      </div>
    )
  }
}

export default Main;
