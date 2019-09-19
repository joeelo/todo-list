import React, { Component } from 'react';
import UsersBook from "./UsersBook";
import styled from "styled-components";
import { Container } from "../styles/styledElements";
import randomColorGenerator from "../styles/randomColorGenerator";

const ProfileContainer = styled(Container)`
    width: 100vw;
    padding: 0;
`

const Header = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    width: 100%;
    height: 150px;
    align-items: baseline;
    justify-content: baseline;
`

const BaseLineH1 = styled.h1`
    align-self: flex-end;
    margin: 0 0 0 10%;
    font-family: Playfair Display, serif;
    font-size: 48px;
`

const LeftContainer = styled.div`

`

const Image = styled.img`
    border-radius: 50%;
    position: relative;
    top: 5px; 
    left: 5px;
`

const BorderCircle = styled.div`
    height: 266px;
    width: 266px;
    border-radius: 50%;
`

class ProfileInfo extends Component {

    state = {
        books: null,
        backgroundColor: ``
    }

    componentDidMount() {
        this.fetchAllUserBooks();
        const randomColor = randomColorGenerator();
        this.setState({backgroundColor: randomColor});

    }

    fetchAllUserBooks = async () => {
        try {
            const url = `http://localhost:3000/user/show/${this.props.user.id}`;
            const response = await fetch(url);
            const json = await response.json();   
            this.setState({
                books: json
            })  
        } catch (error) {
            console.log(error);
        }
    }

    fetchAllNotes = async () => {

    }

    renderUsersBookList = () => {
        const booksArray = this.state.books.books.map((book, index) => {
           return <UsersBook key={index} book={book}/>
        })
        return booksArray;
    }

    render() {
        console.log(randomColorGenerator());
        const style = {
            backgroundColor: this.state.backgroundColor
        }

        return (
            <ProfileContainer>
                <Header style={style}>
                    <BaseLineH1> Your Profile </BaseLineH1>
                </Header>

                <BorderCircle style={{border: `3px solid ${this.state.backgroundColor}`}}>
                    <Image src="https://miro.medium.com/fit/c/256/256/2*YV7osFJW-MqQ4cqDsBIRPQ.jpeg"/>
                </BorderCircle>
                <h2>{this.props.user.name}</h2>
                <h2>{this.props.user.email}</h2>

                <h3>My Books</h3>
                {this.state.books ? this.renderUsersBookList() : null}
            </ProfileContainer>
        )
    }
}

export default ProfileInfo