import NavBar from "./components/UI/Layout/NavBar";
import SafeArea from "./components/UI/Layout/SafeArea";
import RandomSpinner from "./components/UI/RandomSpinner/RandomSpinner";

export default function App() {

  // TODO: make this dynamic before turning into a npm package, for now it's fucking waste of time
  const items = [
    { id: "q1", name: " Village of Odd and Even Numbers", question: `The Village of Odd and Even Numbers

In a small, peaceful village, the numbers lived happily together. But one day, a great debate broke out.

The Odd numbers claimed, "We are the best because we bring excitement to life!"
The Even numbers argued back, "No, we are better because we bring balance and stability!"

The village chief, a wise programmer named Lina, stepped in and said, "We’ll settle this with code. I need a program that will separate the Odd numbers from the Even numbers in a list. Then, we’ll count how many numbers belong to each side."



Can you write a program to:

1. Separate the Odd and Even numbers into two separate lists.


2. Count how many numbers are Odd and how many are Even.


3. Print the lists and their counts?`}
,
{
  id: "q2",
  name: "Grand Staircase",
  question: `A wise king is building a grand staircase for his palace. Each step on the staircase must be built in a way where the number of bricks used for a step equals the total number of bricks used for the previous two steps. The first step uses 1 brick, the second step uses 1 brick, and the pattern continues.

The king wants you to write a program to calculate how many bricks will be needed for the first 10 steps of his staircase.`
},
{
  id: "q3",
  name: "Binary Pattern",
  question: `The program should generate the following binary pattern:

1  
0 1  
1 0 1  
0 1 0 1

Prompt the user to enter the number of rows for the pattern.

The first row starts with 1, the second row starts with 0, the third row starts with 1, and so on.

Each row contains a number of elements equal to its row number (e.g., the 1st row has 1 element, the 2nd row has 2 elements, etc.).

Alternate between 0 and 1 for each element within a row.

Implement this using nested loops to generate rows and elements.
`
},
{
  id: "q4",
  name: "Right-Aligned Triangle Pattern",
  question: `The program should also generate the following right-aligned triangle pattern using asterisks (*):

      *  
    * *  
  * * *  
* * * *

Prompt the user to specify the number of rows for the pattern.

The triangle is right-aligned, meaning the asterisks in each row begin from the rightmost side.

The number of asterisks increases by one in each row, starting with one in the first row.

The program should use nested loops to manage spaces and asterisks to properly align the pattern.


Task: Ensure the program generates both patterns one after another, allowing the user to input the number of rows separately for each pattern.`
},
{
  id: "q5",
  name: "A strong number",
  question: `In the town of Codeton, a young programmer named Sam loved solving interesting number puzzles. One day, while browsing through an old math book, Sam discovered the concept of "strong numbers."

A strong number, the book explained, is a number where the sum of the factorials of its digits equals the number itself. write a code to check if the number is strong number or not.
(e.g. 1,2,145,40585)`
},
{
  id: "q6",
  name: "",
  question: `In the mystical village of Mathora, legends spoke of a special kind of number known as the "magic number." 
 According to the ancient scrolls, a magic number is a number that repeatedly sums the digits until a single-digit result is obtained, and if the result is 1, the number is considered magical.write a code to check if the number is magic number or not.
(e.g. 1, 19, 28, 82, 91, 100, 118)`
},
{
  id: "q7",
  name: "",
  question: `In the enchanting land of Numerica, numbers held secrets and surprises. Among them was the curious "Automorphic number," a number whose square ends with the same digits as the number itself..write a code to check if the number is Automorphic number or not.
(e.g 5,25,76,126)`
},
{
  id: "q8",
  name: "NIVEN NUMBER",
  question: `   The NIST University is going to conduct its 1st University Foundation day. On this occasion Our coding club i.e. Club Excel has organised to conduct a coding game where a student need
   to solve one coding question to showcase their coding skills.

   Two of the friends Aarav and Abhay are eager to showcase there coding skills by participating in this game and hence solves a given problem where they are provided with a non-negative
   number. If the number is *NIVEN number then the winner is Aarav otherwise the winner is Abhay. Let as see who has a good coding skill.

   Print "YES" if Aarav wins the game else print "NO".

   *NIVEN NUMBER : A number is said to be Niven if the number is divisible by the sum of its digits.
                   Example: Number = 126
                   Sum of digits = 1 + 2 + 6 = 9 and 126 is divisible by 9.
                   Hence 126 is an Niven Number.



   INPUT:
        The first line contains one integer N (0 <= N <= 10^3), where N is the non-negative number provided to players.
   
   OUTPUT:
        For each input print "YES" if Aarav wins(i.e. N is Niven Number ), otherwise "NO".`
},
{
  id: "q9",
  name: "REVERSED SCORE ADVENTURE",
  question: `   In a distant galaxy, there exists a magical game played by the inhabitants of the planet XYZ. The game is called Reversed Score, and it determines the worthiness of an individual to
   enter the sacred "Hall of Challenges."

   A non-negative magical number is provided to the challengers.
   To calculate the Score, the challenger must:
    > Reverse the number
    > Compute sum of digits of the reversed number


   EXAMPLE:
          1. If the magical number is 256, reversing it yields 652. The sum of its digits is 6 + 5 + 2 = 13. Hence the Score is 13.
          2. If the magical number is 7, reversing it yields 7. The sum of its digit is 7. Hence Score is 7.



   TASK:
        Write a program to help the inhabitants of XYZ find their Reversed Score for any magical number provided.


   INPUT:
        A single integer N (0 <= N <= 10^3), the magical number.

   OUTPUT:
        A single integer, the Score calculated as the sum of digits of the reversed number.`
},
{
  id: "q10",
  name: "Seauence of Intergers",
  question: `A person is studying a sequence where each number is the sum of previous two, starting with 0 and 1. Write a program to generate the first n numbers of this sequence.
Input: An integer n
Output: A sequence of integers.`
},
{
  id: "q11",
  name: "Largest Side",
  question: `Two farmers want to divide their lands into the largest possible square plots. The lengths their lands are x and y. write a program to find the side length of the largest square plot they can form.
Input: Two Integers x and y
Output: An integer representing the largest side length.`
},
{
  id: "q12",
  name: "Special Numbers",
  question: `A mathematician wants to identify “special” numbers in a dataset. A number is considered special if it equals the sum of its digits raised the power of the number of digits. Write a program to check if a given number is special.
Input: An integer n
Output: Print true if the number is special, otherwise print false.`
},
{
  id: "q13",
  name: "Factorial",
  question: `A researcher is analysing numbers with a unique property. For a given number, if the sum of the factorials of its digits equals the number itself, it is considered special. Write a program to determine whether a given number has this property.
               Input: An integer n
  Output: An integer representing the factorial of n.`
},
{
  id: "q14",
  name: "The Palindrome Quest",
  question: `In the magical land of Palindoria, there is a library of enchanted scrolls. Each scroll has a word inscribed on it. To unlock the secrets of the scroll, the word must be checked to see if it's a palindrome. If it is, the scroll will reveal ancient knowledge; otherwise, it remains sealed.
You are the royal scribe tasked with creating a program to help the kingdom identify which scrolls contain palindromes.
Input:
A single string representing the word inscribed on the scroll. (The word may contain uppercase and lowercase letters, but the check should ignore case.)
Output:
"Yes, it is a palindrome!" if the word is a palindrome.
"No, it is not a palindrome!" if it is not.`
},
{
  id: "q15",
  name: "The Nth Treasure Hunt",
  question: `The treasure vault of Numera is guarded by an ancient puzzle. The puzzle involves a chest filled with numbered coins, and the only way to open it is by identifying the nth largest number from the collection of coins. To solve the puzzle, you must write a program that finds the nth largest number in the given array of coin values.
Input:
An integer n, representing the position of the largest number to find.
An array of integers, where each integer represents the value of a coin.
Output:
The nth largest number in the array.`
},
];

  return (
    <main>
      <SafeArea>
        <NavBar />
        <div className="flex flex-col justify-center items-center h-[calc(100vh-200px)] ">
          <RandomSpinner items={items} />
        </div>
      </SafeArea>
    </main>
  )
}