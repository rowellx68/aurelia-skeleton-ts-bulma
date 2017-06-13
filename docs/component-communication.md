# Component Communication
Inter component communication could be achieved using [Event Aggregator](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/cheat-sheet/10).

We have created a new class `EventManager` to better manage our event subscriptions. It comes with an interface `ISubscription` that we can use to hold our subscriptions.

An example of this usage is inside `app.ts`.

```typescript
private subscriptions: ISubscription[] = [];

attached() {
  this.subscriptions.push(
    this.events.subscribe(appEvents.app.login, () => {
      // do stuff here
      console.log("Event recieved: User logged in");
    }),
    // other subscriptions here
  );
}

detached() {
  this.subscriptions.forEach(s => s.dispose());
}
```

As you can see, you will need to dispose of the subscriptions on component's `detached` event.

This event can be raised by calling the event like below:

```typescript
this.events.publish(appEvents.app.login);
```
