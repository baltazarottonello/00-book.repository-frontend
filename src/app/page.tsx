"use client";

import { useEffect } from "react";
import "./page.css";

export default function Home() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const open = document.getElementById("open");
    const close = document.getElementById("close");

    open?.addEventListener("click", () => {
      nav?.classList.add("visible");
    });

    close?.addEventListener("click", () => {
      nav?.classList.remove("visible");
    });
  }, []);

  return (
    <header>
      <img className="logo" src="book.png" />
      <h1>BookRepository</h1>
      <button className="open-btn" id="open">
        <i className="bi bi-list"></i>
      </button>
      <nav className="nav-element" id="nav">
        <button className="close-btn" id="close">
          <i className="bi bi-x"></i>
        </button>
        <ul className="nav-list">
          <li>
            <button className="nav-button">
              <a href="#">Login</a>
            </button>
          </li>
          <li>
            <button className="nav-button">
              <a href="#">SignUp</a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
