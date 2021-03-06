import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/styles/prism';


import Simple from './Simple';
import AddAndDelete from './AddAndDelete';
import CrossArea from './CrossArea';
import List from './List';
import NestedTags from './NestedTags';
import ControlledTags from './ControlledTags';

import styles from './style.less';

class Main extends Component { 
  render() {
    return (
      <div>
        <div className="head">
          <h1>
            React Draggable Tags
          </h1>
          <h2>
            An easy and flexible tag component
          </h2>
          <a href="https://github.com/YGYOOO/react-draggable-tags">
            View on Github
          </a>
        </div>
        <div className="content">
          <h3 className="section-title">
            Installation
          </h3>
          <SyntaxHighlighter language="jsx" style={prism}>
{`npm install react-draggable-tags --save`}
          </SyntaxHighlighter>

          <h3 className="section-title">
            Simple Usage:
          </h3>
          <div className="des">
            You just need to pass an "initialTags" array and a "render" function to DraggableArea.<br/>
            (React Draggable Tags do not have default styles, you could write any style for the tags as you want)
          </div>
          <Simple />
          <SyntaxHighlighter language="jsx" style={prism}>
{`import {DraggableArea} from 'react-draggable-tags';

const initialTags = [
  {id: 1, name: 'apple'}, {id: 2, name: 'watermelon'}, {id: 3, name: 'banana'},
  {id: 4,  name: 'lemon'}, {id: 5, name: 'orange'}, {id: 6, name: 'grape'},
  {id: 7, name: 'strawberry'}, {id: 8, name: 'cherry'}, {id: 9, name: 'peach'}];`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx" style={prism}>
{`<div className="Simple">
  <DraggableArea
    initialTags={initialTags}
    render={({tag}) => (
      <div className="tag">
        {tag.name}
      </div>
    )}
    onChange={(tags) => console.log(tags)}
  />
</div>`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="css" style={prism}>
{`.Simple {
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  width: 294px;
  height: 220px;
  padding: 5px;
}
.tag {
  margin: 3px;
  font-size: 13px;
  border: 1px dashed #cccccc;
  border-radius: 4px;
  padding: 0 8px;
  line-height: 30px;
  color: #666666;
  background: rgba(255, 255, 255, 0.7);
}`}
          </SyntaxHighlighter>
          <a href="https://github.com/YGYOOO/react-draggable-tags/tree/master/example/simple">
            View code on Github
          </a>


          <h3 className="section-title">
            Add Add Delete:
          </h3>
          <AddAndDelete />
          <SyntaxHighlighter language="jsx" style={prism}>
{`<div className="main">
  <DraggableArea
    initialTags={initialTags}
    render={({tag, deleteThis}) => (
      <div className="tag">
        <img
          className="delete"
          src={deleteBtn}
          onClick={deleteThis}
        />
        {tag.name}
      </div>
    )}
    getAddTagFunc={addTag => this.addTag = addTag}
    onChange={(tags) => console.log(tags)}
  />
</div>
<div className="inputs">
  <input ref={r => this.input = r} />
  <button onClick={this.handleClickAdd}>Add</button>
</div>`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx" style={prism}>
{`handleClickAdd() {
  this.addTag({id: this.input.value , name: this.input.value});
  this.input.value = '';
}`}
          </SyntaxHighlighter>
          <a href="https://github.com/YGYOOO/react-draggable-tags/tree/master/example/AddAndDelete">
            View code on Github
          </a>


          <h3 className="section-title">
            Cross-Area Drag:
          </h3>
          <CrossArea />
          <SyntaxHighlighter language="jsx" style={prism}>
{`import {DraggableAreasGroup} from 'react-draggable-tags';

const group = new DraggableAreasGroup();
const DraggableArea1 = group.addArea();
const DraggableArea2 = group.addArea();`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx" style={prism}>
{`<div className="square left">
  <DraggableArea1
    initialTags={initialTags1}
    render={({tag, deleteThis}) => (
      <div className="tag">
        {tag.name}
      </div>
    )}
    onChange={(tags) => console.log(tags)}
  />
</div>
<div className="square right">
  <DraggableArea2
    initialTags={initialTags2}
    render={({tag, deleteThis}) => (
      <div className="tag">
        <img
          className="delete"
          src={deleteBtn}
          onClick={deleteThis}
        />
        {tag.name}
      </div>
    )}
    onChange={(tags) => console.log(tags)}
  />
</div>`}
          </SyntaxHighlighter>
          <a href="https://github.com/YGYOOO/react-draggable-tags/tree/master/example/CrossArea">
            View code on Github
          </a>


          <h3 className="section-title">
            Draggable List:
          </h3>
          <List />
          <SyntaxHighlighter language="jsx" style={prism}>
{`<DraggableArea
  isList
  initialTags={mock.tags}
  render={({tag, deleteThis}) => (
    <div className="row">
      <img
        className="delete"
        src={deleteBtn}
        onClick={deleteThis}
      />
      {tag.name}
    </div>
  )}
  getAddTagFunc={addTag => this.addTag = addTag}
/>`}
          </SyntaxHighlighter>
          <a href="https://github.com/YGYOOO/react-draggable-tags/tree/master/example/List">
            View code on Github
          </a>


          <h3 className="section-title">
            Nested Tags:
          </h3>
          <div className="des">
            React Draggable Tags is quite flexible, you can put anything in a tag. So you could even build "nested tags" like this:
          </div>
          <NestedTags />
          <SyntaxHighlighter language="jsx" style={prism}>
{`export default class Tag extends Component {
  render() {
    return (
      <div className="InnerTag">
        <div className="inner-square inner-left">
          <DraggableArea1
            ...
          />
        </div>
        <div className="inner-square inner-right">
          <DraggableArea2
            ...
          />
        </div>
      </div>
    );
  }
}`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx" style={prism}>
{`const leftTags = [
  {id: '1', content: <Tag />}, {id: '2', content: <Tag />},
  {id: '3', content: <Tag />}, {id: '4', content: <Tag />}];
const rightTags = [
  {id: '10', content: <Tag />}, {id: '11', content: <Tag />},
  {id: '12', content: <Tag />}];
  
  ...

<div className="square left">
  <DraggableArea1
    initialTags={leftTags}
    ...
  />
</div>
<div className="square right">
  <DraggableArea2
    initialTags={rightTags}
    ...
  />
</div>
`}
          </SyntaxHighlighter>
          <a href="https://github.com/YGYOOO/react-draggable-tags/tree/master/example/NestedTags">
            View code on Github
          </a>


          <h3 className="section-title">
            "Controlled" Tags:
          </h3>
          <div className="des">
            You could have complete controll on the tags, like sorting these tags:
          </div>
          <ControlledTags />
          <SyntaxHighlighter language="jsx" style={prism}>
{`// use "tags" prop instead of "initialTags" on DraggableArea
<div className="main">
  <DraggableArea
    tags={this.state.tags}
    render={({tag}) => (
      <div className="tag">
        <img
          className="delete"
          src={deleteBtn}
          onClick={this.handleClickDelete}
        />
        {tag.name + ':' + tag.positionChangedTimes}
      </div>
    )}
    onChange={this.onChange}
  />
</div>
<div className="inputs">
  <input ref={r => this.input = r} />
  <button onClick={this.handleClickAdd}>Add</button>
</div>`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx" style={prism}>
{`onChange(tags) {
  this.setState({tags});
}

handleClickDelete(tag) {
  const tags = this.state.tags.filter(t => tag.id !== t.id);
  this.setState({tags});
}

handleClickAdd() {
  const tags = this.state.tags.slice();
  tags.push({id: tags[tags.length - 1].id + 1 , name: this.input.value});
  this.setState({tags});
  this.input.value = '';
}

handleClickSort() {
  const tags = this.state.tags.sort(() => Math.random() - .5);
  this.setState({tags});
}`}
          </SyntaxHighlighter>
          <a href="https://github.com/YGYOOO/react-draggable-tags/tree/master/example/ControlledTags">
            View code on Github
          </a>
        </div>
      </div>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(
  <Main />,
  root
);
