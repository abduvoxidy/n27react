import React from "react";
import axios from "axios";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      posts: [],
    };
  }

  componentDidMount() {
    // console.log("component mounted");
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({
        posts: res.data,
      });
      console.log(res.data);
    });
  }

  increment = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    const { count, posts } = this.state;

    return (
      <div>
        <h2 className="text-center ">{count}</h2>

        <div className="flex justify-center gap-3 mt-3">
          <button
            onClick={this.increment}
            className="bg-[#090909] text-[white] rounded p-3"
          >
            increment
          </button>
          {/* <button
            onClick={decrement}
            className="bg-[#090909] text-[white] rounded p-3"
          >
            decrement
          </button> */}
        </div>

        <ul>
          {posts.map((el, index) => {
            return (
              <li className="border-b p-2" key={el.id}>
                {el.id}: {el.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ClassCounter;
