
function Header(props) {
    return (
        <div className='info-section'>
            <img className='avatar' src={props.avatarImg} />
            <div>
                <h1>{props.userName}</h1>
                <p className='bottom-space'>props.profile</p>
            </div>
        </div>
    )
}

function Description(props) {
    return <p style={{lineHeight: 1.3}}>{props.text}</p>
}

function Interest(props) {
    const items = props.list.map(item => <li key={item}>{item}</li>);
    return (
        <div>
            <hr />
            <p style={{fontSize: 18, fontWeight: 'bold'}}>Interests</p>
            <ul>
                {items}
            </ul>
        </div>
    )
}

class Button extends React.Component {
    constructor() {
        super();
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    // Dark and light theme toggle
    toggleTheme() {
        const button = document.querySelector('button');
        const card = document.querySelector('.card');
        const listItems = document.querySelectorAll('li');
        const texts = document.querySelectorAll('h1, p, hr');
        card.classList.toggle('d-background');
        button.classList.toggle('d-button');
        if (button.classList.contains('d-button')) {
            button.innerText = 'Light';
        } else {
            button.innerText = 'Dark';
        }
        texts.forEach(item => {
            item.classList.toggle('white-text');
        });
        listItems.forEach(item => {
            item.classList.toggle('d-li');
        });
    }

    render() {
        return (
            <div className='flex-container'>
                <button className="" id='toggle' onClick={this.toggleTheme}>Dark</button>
            </div>
        )
    }
}

// Icons are not displaying, gotta do more research on this
const style = {
    fontSize: 28,
    margin: 0
};

function Navbar(props) {
    return (
        <ul className='navbar'>
            <li><a href={props.twitter}><i style={style} className="fab fa-twitter-square"></i></a></li>
            <li><a href={props.linkedIn}><i style={style} className="fab fa-linkedin"></i></a></li>
            <li><a href={props.facebook}><i style={style} className="fab fa-facebook-square"></i></a></li>
            <li><a href={props.instagram}><i style={style} className="fab fa-instagram"></i></a></li>
        </ul>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='card'>
                <Navbar 
                    twitter='https://www.twitter.com/@knasumo'
                    linkedIn='https://www.linkedin.com/in/jerome-tokpa-aa6274172'
                    facebook='https://www.facebook.com/jerome-tokpa'
                    instagram='https://www.instagram.com/ace_since_birth' 
                />
                <div className="content">
                    <Header 
                        avatarImg="./avatar.jpg" 
                        userName="Jerome N. Tokpa" 
                        profile="SW Enthusiast | Liberia" 
                    />
                    <Description text="I'm a passionate young man who's obsess with giving instructions to computers. Trying to get React under my belt. Future language is Python. Also knowledgeable of C#, Git, Linux and Java." />
                    <Interest list={['Soccer', 'Video Games', 'Entrepreneurship', 'Reading', 'Movies', 'Building Software']} />
                    <Button />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));