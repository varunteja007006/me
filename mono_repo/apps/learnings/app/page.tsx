import React from "react";

import { Button } from "@workspace/ui/components/button";

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@workspace/ui/components/card";

import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

const PROBLEMS_ROUTE = `/question`;

const data = [
	{
		title: "Delayed Input",
		statement: `    
        Problem Statement: When user inputs text it should register it slow.
      `,
		url: `${PROBLEMS_ROUTE}/delayed-input`,
	},
	{
		title: "Fetch Data Again, Again & Again...",
		statement: `    
       Problem Statement: They provided an URL, we need to fetch the data from that URL every 
       one minute.
       Conditions: Create a custom hook which will take the given URL as an input and 
       returns the output. Main component should use the custom hook to get the result 
       and display the output.`,
		url: `${PROBLEMS_ROUTE}/fetch-again`,
	},
	{
		title: "Timer",
		statement: `    
       Problem Statement: Problem statement: Create a timer. Add functionality to start, stop & reset the timer.
      `,
		url: `${PROBLEMS_ROUTE}/timer-problem`,
	},
	{
		title: "Chess Board",
		statement: `    
       Problem Statement: Create a chess board, then on hover of each cell highlight the path of the bishop.
      `,
		url: `${PROBLEMS_ROUTE}/chess-board`,
	},
	{
		title: "Reset clicks",
		statement: `    
       Problem Statement: User clicks on the buttons and you have to reset the clicks.
      `,
		url: `${PROBLEMS_ROUTE}/reset-clicks`,
	},
	{
		title: "Carousel",
		statement: `    
       Problem Statement: Create a carousel, that auto scrolls every 1.5seconds and also provide buttons to scroll left and right.
      `,
		url: `${PROBLEMS_ROUTE}/carousel`,
	},
	{
		title: "Pagination",
		statement: `    
       Problem Statement: Create a pagination to display products.
      Prev and Next button should be disabled if there are no pages to navigate, also highlight the current page.
       `,
		url: `${PROBLEMS_ROUTE}/pagination`,
	},
	{
		title: "Traffic Light",
		statement: `    
       Problem Statement: Create a traffic light that toggles between the red, yellow and green color.
      `,
		url: `${PROBLEMS_ROUTE}/traffic-light`,
	},
	{
		title: "Simple Form",
		statement: `    
       Problem Statement: Create a simple form with name, email and password.
      `,
		url: `${PROBLEMS_ROUTE}/simple-form`,
	},
	{
		title: "Swap the odds",
		statement: `    
       Problem Statement: You will have two carts. Each cart will have 5 different items .Add a button on the screen, on click of the button swap only the odd item from cart A, with odd items in cart B.
      `,
		url: `${PROBLEMS_ROUTE}/swap-the-odds`,
	},
	{
		title: "Excel Mock Up",
		statement: `    
       Problem Statement: Create an excel mock up. 
       Add row and col buttons
       Ability to input the data in the cells
      `,
		url: `${PROBLEMS_ROUTE}/excel-mock-up`,
	},
	{
		title: "Progress bar",
		statement: `    
       Problem Statement: Create a progress bar. 
      `,
		url: `${PROBLEMS_ROUTE}/progress-bar`,
	},
	{
		title: "Google Search",
		statement: `    
       Problem Statement: Create a Google Search. 
      `,
		url: `${PROBLEMS_ROUTE}/google-search`,
	},
	{
		title: "Folder Tree",
		statement: `    
       Problem Statement: Create a folder tree to display hierarchical folder structures.
      `,
		url: `${PROBLEMS_ROUTE}/folder-tree`,
	},
];

const Main = () => {
	const problems_data = data.sort((a, b) => a.title.localeCompare(b.title));
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Machine Coding Problem Statements:</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
					{problems_data.map((item, index) => {
						return (
							<div
								key={index}
								className="w-full flex flex-row items-center justify-between border rounded-md p-2 border-primary shadow"
							>
								<p>{item.title}</p>

								<div className="flex gap-2 justify-start items-center">
									<Button size={"icon-sm"} variant={"outline"} asChild={true}>
										<Link href={item.url || ""}>
											<ArrowUpRight className="size-6" />
										</Link>
									</Button>
								</div>
							</div>
						);
					})}
				</div>
			</CardContent>
		</Card>
	);
};

export default function Page() {
	return (
		<div className="flex min-h-svh p-6">
			<Main />
		</div>
	);
}
