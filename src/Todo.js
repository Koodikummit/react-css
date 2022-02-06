import styled from 'styled-components';

const TodoList = styled.div`
  border: 1px solid white;
  margin: 2em;
`;

const TodoRow = styled.div`
    margin: 2em;
    display: flex;
    align-items: center;

    > * {
        margin-right: 1em;
    }
`

const TodoButton = styled.button`
    // margin-left: auto;
    flex-grow: 1;
    flex-shrink: 0;
    display: none;

    @media (min-width: 300px) {
        display: block;
    }
`

const TodoCheckbox = styled.div`
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    padding: 6px;
    border: 3px solid currentColor;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        margin-top: -12px;
        border-color: green;
        border-width: 3px;
        border-style: none none solid solid;
        width: 32px;
        height: 16px;
        content: ' ';
        display: ${({checked}) => checked? 'block' : 'none'};
        transform: rotate(-45deg);
    }

`

const TodoText = styled.div`
    color: #ccc;
    flex-grow: 2;
`

const TodoWrapper = styled.div`
    display: flex;
    align-items: baseline;

    * + * {
        margin-left: 1em;
    }
`

const TodoItem = ({ email, checked, children }) => (
    <TodoRow className="todo-row Outside" data-email={email}>
        <TodoCheckbox checked={checked} />
        <TodoWrapper>
            <TodoText>
                {children}
            </TodoText>
            <TodoButton>Mark as Done</TodoButton>
        </TodoWrapper>
    </TodoRow>
);

const Todo = () => (
    <TodoList>
        <TodoItem checked>Welcome</TodoItem>
        <TodoItem checked>SCSS</TodoItem>
        <TodoItem email="niko@houston-inc.com">Styled</TodoItem>
        <TodoItem email="foo@bar.com">Box model</TodoItem>
        <TodoItem>Flexbox</TodoItem>
        <TodoItem>Let's build a website</TodoItem>
    </TodoList>
)

export default Todo;