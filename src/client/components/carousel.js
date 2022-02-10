import React, { useEffect, useState } from "react";

function Carousel ({ children, interval, className, ...props }) {
    
    const items = children.filter( element => element );
    const timeout = interval ?? 5000;

    const [ current, setCurrent ] = useState( 0 );
    const [ isAnimating, setAnimating ] = useState( false );
    const [ intervalObject, setIntervalObject ] = useState( null );

    setIntervalObject( setInterval( function nextTurn () {
        setCurrent( ++current == items.length ? 0 : current );
        setAnimating( true );
    }, timeout ));

    useEffect( function componentDidMount () {
        if ( !isAnimating ) setTimeout( function () {
            setAnimating( false );
        }, 600 )

        return function componentWillUnMount () {
            clearInterval( intervalObject );
        }
    }, [ isAnimating ]);

    return <div className={[ 'carousel', className ].filter( Boolean ).join(" ")} { ...props }>
        <div className="carousel-inner">
            { items.map( function ( item, index ) {
                const className = [
                    "carousel-item",
                    current == index && "active",
                    (current == items.length - 1 ? 0 : current + 1) == index && "next",
                    isAnimating && (current || items.length) - 1 == index && "animating",
                    isAnimating && current == index && "animating",
                ].filter(Boolean).join(" ");

                return <div className={ className } key={ index }>
                    { item }
                </div>;
            }) }
        </div>
    </div>;
}

export default class _Carousel extends React.Component {
    constructor(props) {
        super(props);

        const items = this.props.children;

        this.state = {
            items,
            current: 0,
            isAnimating: false,
            timeout: this.props.interval ?? 5000
        };

        this.nextTurn = this.nextTurn.bind(this);
        this.renderItems = this.renderItems.bind(this);
    }

    componentDidMount() {
        this.setState({
            interval: this.state.timeout && setInterval(this.nextTurn, this.state.timeout < 1000 ? 1000 : this.state.timeout)
        });
    }

    componentWillUnmount() {
        if (this.state.timeout) clearInterval(this.state.interval);
    }

    componentDidUpdate() {
        if (this.state.isAnimating) setTimeout(function () {
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

        return items.map( function (item, index) {
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

        return <div className={[ 'carousel', className ].filter( Boolean ).join(" ")} {...props}>
            <div className="carousel-inner">
                { this.renderItems() }
            </div>
        </div>;
    }
}
