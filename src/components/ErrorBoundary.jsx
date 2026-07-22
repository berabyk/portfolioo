import { Component } from "react";

// Generic error boundary — renders `fallback` if a child throws (e.g. the
// GitHub calendar failing to fetch), keeping the rest of the page alive.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    /* swallow — the fallback is enough for the user */
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}
