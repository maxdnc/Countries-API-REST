import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import NavBar from "@/components/layouts/NavBar";

describe("NavBar", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const whereInTheWorldElement = screen.getByText("Where in the world ?");
    const favorite = screen.getByText("Favorite");
    const modeToggleButton = screen.getByRole("button", {
      name: "Toggle theme",
    });

    expect(whereInTheWorldElement).toBeInTheDocument();
    expect(favorite).toBeInTheDocument();
    expect(modeToggleButton).toBeInTheDocument();
  });
  it("should have correct href for home link", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const homeLink = screen.getByRole("link", { name: "Where in the world ?" });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("should have correct href for favorite link", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const favoriteLink = screen.getByRole("link", { name: "Favorite" });
    expect(favoriteLink).toHaveAttribute("href", "/favorite");
  });
});
