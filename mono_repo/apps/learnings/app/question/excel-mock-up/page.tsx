"use client";
import React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@workspace/ui/components/card";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { toast } from "sonner";

export default function ExcelMockUp() {
	const [excelGrid, setExcelGrid] = React.useState<
		{
			value: string;
		}[][]
	>([
		[
			{
				value: "",
			},
		],
	]);

	const addRow = () => {
		setExcelGrid((prev) => {
			const x = prev && prev?.[0];
			const len = x ? x.length : 0;
      
			const newRow = Array(len).fill({ value: "" });
			return [...prev, newRow];
		});
	};

	const addCol = () => {
		setExcelGrid(excelGrid.map((row) => [...row, { value: "" }]));
	};

	const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		toast("Excel data saved successfully!");
	};

	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle>Excel Mockup</CardTitle>
					<CardDescription>
						In the excel mock up we have to add row and col buttons, ability to
						input the data in the cells.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<form onSubmit={onSubmit} className="space-y-4">
						{excelGrid.map((row: any, rowIndex: number) => (
							<div key={rowIndex} className="flex flex-row gap-3">
								{row.map((cell: any, cellIndex: number) => (
									<Input
										key={cellIndex}
										value={cell.value}
										onChange={(e) =>
											setExcelGrid((prev: any) => {
												const newGrid = [...prev];
												newGrid[rowIndex][cellIndex] = {
													...newGrid[rowIndex][cellIndex],
													value: e.target.value,
												};
												return newGrid;
											})
										}
									/>
								))}
							</div>
						))}
						<Button type="submit" variant={"default"}>
							Save
						</Button>
					</form>
					<div className="flex flex-row gap-2">
						<Button variant="outline" onClick={addRow}>
							Add Row
						</Button>
						<Button variant="outline" onClick={addCol}>
							Add Column
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
