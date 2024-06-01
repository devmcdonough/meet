import { Component } from "react";

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
        this.bgColor = null;
    }

    getStyle = () => {
        return {
            color: this.color,
            backgroundColor: this.bgColor,
            borderWidth: "2px",
            borderStyle: "solid",
            fontWeight: "bolder",
            borderRadius: "4px",
            borderColor: this.color,
            textAlign: "center",
            fontSize: "12px",
            margin: "10px 0",
            padding: "10px"
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}

export class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(0, 0, 255)'; //blue
        this.bgColor = 'rgb(220,220, 255)'; // light blue
    }
}

export class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(255, 0, 0)'; // red
        this.bgColor = '#FFCCCB' // light red
    }
}

export class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(255, 165, 0)'; // orange
        this.bgColor = '#BFFF00' // light orange
    }
}


