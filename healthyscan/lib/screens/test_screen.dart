import 'package:flutter/material.dart';

class ChatScreen extends StatefulWidget {
  static const String id = 'chat_screen';
  @override
  _ChatScreenState createState() => _ChatScreenState();
}

const kMessageTextFieldDecoration = InputDecoration(
  contentPadding: EdgeInsets.symmetric(vertical: 10.0, horizontal: 20.0),
  hintText: 'Type your message here...',
  border: InputBorder.none,
);

const kMessageContainerDecoration = BoxDecoration(
  border: Border(
    top: BorderSide(color: Color(0xFFbdd5c9), width: 2.0),
  ),
);

class _ChatScreenState extends State<ChatScreen> {
  final messageTextController = TextEditingController();
  List<String> messages = []; // List to store messages

  @override
  void dispose() {
    // Dispose of the controller to avoid memory leaks
    messageTextController.dispose();
    super.dispose();
  }

  void addMessage(String message) {
    setState(() {
      messages.add(message);
      messageTextController.clear(); // Clear the text field after adding
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          onPressed: () => Navigator.pop(context),
          icon: Icon(
            Icons.arrow_back,
            color: Colors.black,
          ),
        ),
        actions: <Widget>[
          IconButton(
              icon: Icon(
                Icons.close,
                color: Colors.black,
              ),
              onPressed: () => Navigator.pop(context)),
        ],
        title: Text(
          'Chat with AI',
          style: TextStyle(color: Colors.black),
        ),
        backgroundColor: Color(0xFFa8d1ce),
      ),
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Expanded(
              child: ListView.builder(
                // Use ListView.builder for dynamic list
                reverse: true,
                padding: EdgeInsets.symmetric(horizontal: 10.0, vertical: 20.0),
                itemCount:
                    messages.length, // Set item count based on message list
                itemBuilder: (context, index) {
                  String message = messages[index];
                  return MessageBubble(
                      text: message); // Pass message to MessageBubble
                },
              ),
            ),
            Container(
              decoration: kMessageContainerDecoration,
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  Expanded(
                    child: TextField(
                      controller: messageTextController,
                      onChanged: (value) {}, // No need for onChanged here
                      decoration: kMessageTextFieldDecoration,
                    ),
                  ),
                  TextButton(
                    onPressed: () {
                      addMessage(messageTextController
                          .text); // Add message on button press
                    },
                    child: Text(
                      'Send',
                      style: TextStyle(
                        color: Colors.lightBlueAccent,
                        fontWeight: FontWeight.bold,
                        fontSize: 18.0,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class MessageBubble extends StatelessWidget {
  final String text;
  const MessageBubble({required this.text});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(10.0),
      child: Column(
        crossAxisAlignment:
            CrossAxisAlignment.end, // All messages appear on the right
        children: [
          Material(
            elevation: 5.0,
            borderRadius: BorderRadius.only(
              topLeft: Radius.circular(30.0),
              bottomLeft: Radius.circular(30.0),
              bottomRight: Radius.circular(30.0),
            ),
            color: Colors.lightBlueAccent,
            child: Padding(
              padding: EdgeInsets.symmetric(vertical: 10.0, horizontal: 20.0),
              child: Text(
                text,
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 15.0,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
