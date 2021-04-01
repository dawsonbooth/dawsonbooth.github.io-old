import * as React from "react";
import { FormEvent } from "react";

import { Box, Button, Label, Input, Textarea, Styled } from "theme-ui";

import Layout from "../components/layout";

const Contact = () => {
  const submitForm = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open("post", "https://formspree.io/f/xjvpzegr");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        alert("Your message has been delivered. Thanks for stopping by!");
      } else {
        alert(
          "There was an error sending your message. Please try again soon!"
        );
      }
    };
    xhr.send(data);
  };

  return (
    <Layout title="Contact">
      <Styled.h1>Contact</Styled.h1>
      <Box
        as="form"
        onSubmit={submitForm}
        mb={15}
        sx={{ width: "100%", textAlign: "left" }}
      >
        <Label htmlFor="name">Name</Label>
        <Input name="name" type="text" required mb={3} />

        <Label htmlFor="_replyto">Email</Label>
        <Input name="_replyto" type="email" mb={3} />

        <Label htmlFor="subject">Subject</Label>
        <Input name="subject" type="text" required mb={3} />

        <Label htmlFor="message">Message</Label>
        <Textarea name="message" required rows={6} mb={3} />

        <Button type="submit">Submit</Button>
        <Input name="_gotcha" type="text" sx={{ display: "none" }} />
      </Box>
    </Layout>
  );
};

export default Contact;
