import type { ReactNode } from 'react'
import { Component } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Algo salió mal</h2>
          <p>Ocurrió un error inesperado. Por favor, recarga la página.</p>
          <button type="button" className="btn-filled" onClick={() => window.location.reload()}>
            Recargar página
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
