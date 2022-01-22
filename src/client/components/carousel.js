import React from "react";

export class Carousel extends React.Component {
    constructor(props) {
        super(props);

        const items = this.props.children.filter(element => element);

        this.state = {
            items,
            current: 0,
            isAnimating: false,
            timeout: this.props.interval ?? 5000
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.nextTurn = this.nextTurn.bind(this);
        this.renderItems = this.renderItems.bind(this);
    }

    componentDidMount() {
        this.setState({
            interval: this.state.timeout && setInterval(this.nextTurn, this.state.timeout < 1000 ? 1000 : this.state.timeout)
        });
    }

    componentWillUnmount() {
        if (this.state.timeout)
            clearInterval(this.state.interval);
    }

    componentDidUpdate() {
        if (this.state.isAnimating)
            setTimeout(function () {
                this.setState({
                    isAnimating: false
                });
            }.bind(this), 1000);
    }

    nextTurn() {
        this.setState({
            current: ++this.state.current == this.state.items.length ? 0 : this.state.current,
            isAnimating: true
        });
    }

    renderItems() {
        const { current, items, isAnimating } = this.state;

        return items.map(function (item, index) {
            const className = [
                "carousel-item",
                current == index && "active",
                (current == items.length - 1 ? 0 : current + 1) == index && "next",
                isAnimating && (current || items.length) - 1 == index && "animating",
                isAnimating && current == index && "animating",
            ].filter(Boolean).join(" ");

            return <div className={className} key={index}>
                {item}
            </div>;
        }.bind(this));
    }

    render() {
        const { className, children, ...props } = this.props;
        return <div className={['carousel', className].filter(Boolean).join(" ")} {...props}>
            <div className="carousel-inner">
                {this.renderItems()}
            </div>
        </div>;
    }
}
