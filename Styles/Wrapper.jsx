import styled from "styled-components";

export default styled.div`
  font-family: sans-serif;
  padding: 4em;
  background: grey;

  > p {
    font-size: 12px;
    font-weight: bold;
  }

  > label {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    width: 100%;
    display: block;
    margin: auto;
    margin-top: 10px;
    cursor: pointer;
    background-color: #555555;
  }

  ${props =>
    props.box
      ? " box-sizing: border-box; color :orange; display: block;position: relative;margin: auto;margin-top: 10px;width: 100px;border-radius: 2px;border: 1px solid #cacaca;padding: 3px;box-shadow: 1px 1px #e7e7e7;"
      : "box-sizing: border-box; display: block;position: relative;margin: auto;margin-top: 10px;width: 100px;padding: 3px;"}
`;
