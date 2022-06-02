var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

// console.log(weekday);

if (weekday === "Monday") {
  console.log("Let's get this weeks started!");
} else if (weekday === "Tuesday") {
  console.log("Worky worky!");
} else if (weekday === "Wednesday") {
  console.log("Hump day. Keep going!");
} else if (weekday === "Thursday") {
  console.log("Thirst Thursday. Only one more workday.");
} else if (weekday === "Friday") {
  console.log("Weekend is almost here!");
} else {
  console.log("Enjoy your weekend!!");
}
