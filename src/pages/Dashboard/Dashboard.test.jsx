import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  test("renders loading state initially", () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("renders dashboard components after data load", async () => {
    vi.useFakeTimers();
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );

    await vi.runAllTimers();

    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    expect(screen.getByText(/revenue/i)).toBeInTheDocument();
    expect(screen.getByText(/orders/i)).toBeInTheDocument();

    vi.useRealTimers();
  });
});
