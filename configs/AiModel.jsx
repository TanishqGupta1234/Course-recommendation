const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on Following\nDetail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level:Basic, Duration:1 hours, NoOf Chapters:5, in JSON format\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"courseName\": \"Introduction to Python Programming\",\n  \"description\": \"This introductory course provides a foundational understanding of Python programming.  You will learn the basics of syntax, data types, control structures, and functions.  By the end of this course, you will be able to write simple Python programs.\",\n  \"chapters\": [\n    {\n      \"chapterName\": \"Setting Up Your Python Environment\",\n      \"about\": \"This chapter covers installing Python, setting up a suitable IDE or text editor, and running your first Python program. We will also discuss different ways to execute Python code.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Basic Syntax and Data Types\",\n      \"about\": \"This chapter introduces fundamental Python syntax, including variables, operators, and basic data types such as integers, floats, strings, and booleans.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"chapterName\": \"Control Structures: Conditional Statements and Loops\",\n      \"about\": \"This chapter explores conditional statements (if, elif, else) and loops (for, while) which allow you to control the flow of your program's execution.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"chapterName\": \"Working with Functions\",\n      \"about\": \"This chapter introduces functions, a crucial concept in programming for code reusability and organization.  You'll learn how to define and call functions with parameters and return values.\",\n      \"duration\": \"10 minutes\"\n    },\n    {\n      \"chapterName\": \"Basic Input/Output and Data Structures (Introduction)\",\n      \"about\": \"This chapter introduces basic input/output operations and provides a brief overview of fundamental data structures like lists and dictionaries.  This serves as a stepping stone to more advanced topics.\",\n      \"duration\": \"5 minutes\"\n    }\n  ],\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"totalDuration\": \"1 hour\" ,\n  \"noOfChapters\": 5\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
 