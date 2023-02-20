import React from 'react';
import {
Card,
CardBody,
CardFooter
} from 'reactstrap';

const Footer = () => {
    return(
        <div>
        <Card
        className="my-2"
        style={{
        width: '100%'
        }}
        >
            <CardFooter>
            © 2023 | Lea Hazel
            </CardFooter>
        </Card>
        </div>
    )
}

export default Footer;