# Agent Concepts and MCP Basics

Artificial Intelligence systems are becoming more capable every day, but not every AI application is an agent. Many products use the word "agent" even when they are actually simple workflows. Understanding the difference helps us design better AI systems and evaluate new AI products more accurately.

A **workflow** is a sequence of predefined steps. Every step is planned in advance, and the AI simply follows those steps. The workflow does not decide what to do next based on its own reasoning. Instead, a developer determines the order of operations. For example, an application might receive a user's question, send it to an AI model, generate an answer, and display the response. Every user goes through the same process.

An **agent** is different because it can make decisions while solving a problem. Instead of following one fixed path, the agent observes the current situation, decides which action should happen next, uses available tools, evaluates the results, and continues until it achieves its goal. The exact sequence of actions is not completely predetermined. The agent has the ability to plan and adapt.

My FL-04 project is best classified as a **workflow**, not an agent. In my project, the user provides an input, the application processes it, sends it to the AI model, receives a response, and displays the output. The sequence never changes. The AI is not deciding which tool to use, whether additional information is needed, or whether another step should be performed. The logic is controlled entirely by the application.

To transform this workflow into an actual agent, the system would need decision-making abilities. For example, before answering a question, the AI could decide whether it should search project files, read documentation, query a database, or call an external API. After receiving information, it could determine whether it has enough evidence or if additional actions are necessary before producing the final response.

One technology that makes this possible is the **Model Context Protocol (MCP)**. MCP is an open standard that allows AI models to communicate with external tools in a consistent way. Instead of building a separate integration for every application, developers can expose capabilities through MCP, and any compatible AI client can use them. Because of this, MCP is often described as a "USB-C for AI applications." Just as USB-C lets many devices connect through one standard interface, MCP provides one standard way for AI systems to connect to tools and data sources.

MCP is built around three important concepts.

The first concept is **Tools**. Tools perform actions. A tool might read a file, search a database, create a calendar event, send an email, or query an online service. When the AI decides that an action is required, it calls the appropriate tool instead of relying only on its internal knowledge.

The second concept is **Resources**. Resources are pieces of information that the AI can access. Examples include local files, project documentation, spreadsheets, databases, and other stored content. Resources provide the information needed for the AI to reason accurately.

The third concept is **Prompts**. Prompts are reusable instructions that guide the AI when performing common tasks. Instead of writing the same instructions repeatedly, developers can define prompt templates that standardize how tasks should be completed.

For this assignment, I connected an MCP-compatible connector and successfully completed tasks that ordinary chat could not perform independently. The connector accessed external information through tool calls rather than relying only on the language model's built-in knowledge. This demonstrated how MCP extends an AI system beyond conversation into practical work.

If I were to upgrade my FL-04 workflow into a true agent, I would allow the AI to decide which external tools should be used automatically. For example, if a user asks a question about my project, the AI could first inspect the project files, search relevant documentation, retrieve database information if necessary, and only then generate an answer. The AI would evaluate whether it has enough information before responding instead of following one fixed sequence every time.

In conclusion, workflows and agents are related but not identical. A workflow follows predetermined steps, while an agent plans, reasons, and adapts to achieve a goal. MCP provides the standardized connection between AI systems and external tools through tools, resources, and prompts. By adding decision-making and tool selection to my FL-04 project, it could evolve from a simple workflow into a genuine AI agent.
