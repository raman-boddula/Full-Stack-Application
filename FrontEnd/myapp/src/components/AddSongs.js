import React from "react";
import { Input, Form, Button } from "antd";
export const AddSongs = () => {
  return (
    <div style={{ width: "50%", marginLeft: "25%", marginTop: "5%" }}>
      <h1>add songs / Album</h1>
      <Form>
        <Input placeholder="add song here" />
        <Input placeholder="add song here" />
        <Input placeholder="add song here" />
        <Input placeholder="add song here" />
        <Input placeholder="add song here" />
        <Input placeholder="add song here" />
        <Input placeholder="add song here" />
        <Input placeholder="add song here" />
        <Button type="primary">Add Song</Button>
      </Form>
    </div>
  );
};
