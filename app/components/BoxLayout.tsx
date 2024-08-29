"use client"; // Ensures the component is a client component

import { Box } from '@mui/material';
import React from 'react';
import GridLayout from "react-grid-layout";

export type BoxLayoutItem = {
    i: string; // Unique identifier for the item
    x: number; // x position
    y: number; // y position
    w: number; // width
    h: number; // height
    static?: boolean; // Optional: whether the item is static
    minW?: number; // Optional: minimum width
    maxW?: number; // Optional: maximum width
};

export type BoxLayoutProps = {
    layout?: BoxLayoutItem[]; // Array of layout items
    cols?: number; // Number of columns in the grid
    rowHeight?: number; // Height of each row in the grid
    width?: number; // Total width of the grid container
};

// Default layout with 10 items, you can customize sizes here if needed
const defaultLayout: BoxLayoutItem[] = Array.from({ length: 10 }, (_, index) => ({
    i: `item${index + 1}`,
    x: (index % 4) * 3, // Adjust for spacing
    y: Math.floor(index / 4) * 3,
    w: 2 + (index % 2), // Width varies for demonstration
    h: 2 + Math.floor(index / 5), // Height varies for demonstration
}));

export default function BoxLayout({
    layout = defaultLayout, // Use default layout if none provided
    cols = 12,
    rowHeight = 30,
    width = window.innerWidth,
}: BoxLayoutProps) {


    
    return (
        <GridLayout
            className="layout"
            layout={layout}
            cols={cols}
            rowHeight={rowHeight}
            width={width}
        >
            {layout.map((item) => (
                <Box
                    sx={{ border: "2px red solid" }}
                    key={item.i}
                    data-grid={item}
                >
                    {item.i}
                </Box>
            ))}
        </GridLayout>
    );
}
