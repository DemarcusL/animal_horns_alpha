import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state={
      favorites: 0
    }
  }

  addFavorite = () => {
    this.setState({ favorites: this.state.favorites + 1 });
      // Code breaks here, not sure why
    this.props.showBeastAsModal(this.props.title);
  }

  render() {
    return(
    <Card 
      style={{ width: '18rem' }}
      bg="light"
      text="dark"
      onClick={this.addFavorite}
      >
        <Card.Img variant="top" src={this.props.src} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            ❤️ = {this.state.favorites} 
          </Card.Text>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;




// function HornedBeasts({ title, image_url, description, horns, keyword, index }) {


//       // const [beastName, setbeastName] = useState('')

//       // const handleClick = (e) => {
//       //       e.preventDefault()

//       //       console.log(`You Liked ${title}`);
//       //       // console.log(`${}`);

//       //       setbeastName({title});

//       // }


//       return (
//             <div>
//                   {/* <p>{beast}</p> */}
//                   <img src={image_url} alt="" />
//                   {/* <Image src={image_url} alt="" fluid /> */}
//                   <h3>Name: {title}</h3>
//                   <p>Short Discription: {description}</p>
//                   <p>Number of Horns: {horns}</p>
//                   <h5>Keyword: {keyword}</h5>
//                   <h5> Click here to like !</h5>
                  

//             </div>
//       )
// }

// export default HornedBeasts
