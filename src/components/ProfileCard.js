import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Avatars from "./Avatar";
import tw from "tailwind.macro";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Wrapper = styled.a`
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white`};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
   cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }
  background: white;
  //background: ${props => props.bg};
  
`;

const Details = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  color: black;
  
`;

const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

class ProfileCard extends Component {

  state = {
    open: false,
    scroll: 'body',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { title:title, image:image, children:children, details:details} = this.props;
    return (
      <Wrapper onClick={this.handleClickOpen}>
        <Title>{title}</Title>
        <Text>{children}</Text>
        <Avatars image={image}/>
        <Dialog
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogContent>
            <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
            <DialogContentText>
            {details}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Wrapper>
    );
  }
}

export default ProfileCard;

ProfileCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired
};
