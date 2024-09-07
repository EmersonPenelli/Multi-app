// Importa hooks e componentes do React e bibliotecas externas.
import { useState, useEffect } from "react";
<<<<<<< HEAD
import { Route, Routes, Navigate, useNavigate, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Pages/Loading";
import { useAuth } from "./components/Contexts/AuthContext";
=======
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
>>>>>>> a15729691886a11a600d094604c998dad4a4dcda
import styled from "styled-components";
import {
  FaQrcode,
  FaSearch,
  FaTasks,
  FaRegQuestionCircle,
  FaGlobeAmericas,
  FaNetworkWired,
  FaBars,
  FaArrowLeft,
} from "react-icons/fa";
<<<<<<< HEAD

import Carrousell from "./components/Pages/Carrousel";

import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//

=======
import QRCodeGenerator from "./components/QRCodeGenarator";
import IPAddressFinder from "./components/IPAddressFinder";
import MovieSearchEngine from "./components/MovieSearchEngine";
import TodoApp from "./components/TodoApp";
import QuizApp from "./components/QuizApp";
import LanguageTranslator from "./components/LanguageTranslator";
import Login from "./components/Login";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

>>>>>>> a15729691886a11a600d094604c998dad4a4dcda
// Estiliza o contêiner principal do aplicativo.
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
`;

// Estiliza o conteúdo principal do aplicativo.
const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
<<<<<<< HEAD
  height: 100%;
  overflow: hidden;
`;

=======
  min-height: 100vh;
  overflow: hidden;
`;

// Estiliza o contêiner do carrossel.
const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 70%;
  margin: auto;
  background-color: #2c3e50;
  border-radius: 20px;
  padding: 20px;
`;

>>>>>>> a15729691886a11a600d094604c998dad4a4dcda
// Estiliza a barra de navegação.
const NavBar = styled.div`
  width: 240px;
  background-color: #2c3e50;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 3px 0 15px rgba(0, 0, 0, 0.3);
<<<<<<< HEAD
  z-index: 1000;
=======

>>>>>>> a15729691886a11a600d094604c998dad4a4dcda
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

// Estiliza o botão de alternância da barra de navegação.
const NavBarToggle = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Estiliza os links na barra de navegação.
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #34495e;
    color: #ecf0f1;
  }
`;

// Estiliza o rodapé do aplicativo.
const Footer = styled.div`
  width: 100%;
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    padding: 5px 0;
    font-size: 12px;
  }
`;

<<<<<<< HEAD
=======
// Estiliza os itens individuais do carrossel.
const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  width: 100%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: white;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 16px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

>>>>>>> a15729691886a11a600d094604c998dad4a4dcda
// Estiliza o botão de retorno.
const ReturnButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

<<<<<<< HEAD
// Define o componente principal do aplicativo.
const App = () => {
  const { isAuth, logout } = useAuth(); // context de auth do usuario!
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const navigate = useNavigate();

  const QRCodeGenerator = lazy(() =>
    import("./components/Pages/QRCodeGenarator")
  ); // Componentes com lazy loading adcionados para fluidez de carregamento.
  const IPAddressFinder = lazy(() =>
    import("./components/Pages/IPAddressFinder")
  );
  const MovieSearchEngine = lazy(() =>
    import("./components/Pages/MovieSearchEngine")
  );
  const TodoApp = lazy(() => import("./components/Pages/TodoApp"));
  const QuizApp = lazy(() => import("./components/Pages/QuizApp"));
  const LanguageTranslator = lazy(() =>
    import("./components/Pages/LanguageTranslator")
  );
  const LoginComponent = lazy(() => import("./components/Pages/Login"));

  useEffect(() => {
    setIsAuthenticated(isAuth);
  }, [isAuth]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

=======
// Estiliza o carrossel personalizado.
const CustomCarousel = styled(Carousel)`
  width: 100%;
  .carousel-status {
    display: none;
  }
`;

// Define o componente principal do aplicativo.
const App = () => {
  // Cria estados para autenticação, visibilidade da barra de navegação, componente atual, e índice do carrossel.
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const navigate = useNavigate(); // Hook para navegação.

  // Efeito colateral que redireciona para a página de login se não estiver autenticado.
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  // Função para simular login e redirecionar para o gerador de QR code.
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/qrcode-generator");
  };

  // Função para simular logout e redirecionar para a página de login.
  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  // Alterna a visibilidade da barra de navegação.
>>>>>>> a15729691886a11a600d094604c998dad4a4dcda
  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

<<<<<<< HEAD
  const handleReturn = () => {
    navigate("/");
  };

  return (
    <AppContainer>
      {isAuthenticated && (
        <>
          <NavBarToggle onClick={toggleNavBar}>
            <FaBars size={24} color="#2C3E50" />
          </NavBarToggle>
          <NavBar isOpen={isNavBarOpen}>
            <NavBarToggle onClick={toggleNavBar}>
              <FaBars
                size={24}
                color="#ffffff"
                style={{ marginRight: "2.4em" }}
              />
            </NavBarToggle>
            <StyledLink to="/qrcodegen">
              <FaQrcode /> QR Code Generator
            </StyledLink>
            <StyledLink to="/ipaddress">
              <FaNetworkWired /> IP Address Finder
            </StyledLink>
            <StyledLink to="/moviesearch">
              <FaSearch /> Movie Search
            </StyledLink>
            <StyledLink to="/todoapp">
              <FaTasks /> To Do App
            </StyledLink>
            <StyledLink to="/quizapp">
              <FaRegQuestionCircle /> Quiz App
            </StyledLink>
            <StyledLink to="/langtradutor">
              <FaGlobeAmericas /> Translator
=======
  // Função para definir o componente atual a ser exibido e atualizar o índice do carrossel.
  const handleAccess = (index, component) => {
    setCarouselIndex(index);
    setCurrentComponent(component);
  };

  // Função para retornar ao carrossel principal.
  const handleReturn = () => {
    setCurrentComponent(null);
  };

  // Função para renderizar o componente atual com base no estado.
  const renderComponent = () => {
    switch (currentComponent) {
      case "QRCodeGenerator":
        return <QRCodeGenerator />;
      case "IPAddressFinder":
        return <IPAddressFinder />;
      case "MovieSearchEngine":
        return <MovieSearchEngine />;
      case "TodoApp":
        return <TodoApp />;
      case "QuizApp":
        return <QuizApp />;
      case "LanguageTranslator":
        return <LanguageTranslator />;
      default:
        return null;
    }
  };

  // Renderiza o componente principal.
  return (
    <AppContainer>
      <NavBarToggle onClick={toggleNavBar}>
        <FaBars size={24} color="#2C3E50" />
      </NavBarToggle>
      {!isAuthenticated ? (
        <MainContent>
          <Login onLogin={handleLogin} />
        </MainContent>
      ) : (
        <>
          <NavBar isOpen={isNavBarOpen}>
            <StyledLink onClick={() => handleAccess(0, "QRCodeGenerator")}>
              <FaQrcode />
              QR Code Generator
            </StyledLink>
            <StyledLink onClick={() => handleAccess(1, "IPAddressFinder")}>
              <FaNetworkWired />
              IP Address Finder
            </StyledLink>
            <StyledLink onClick={() => handleAccess(2, "MovieSearchEngine")}>
              <FaSearch />
              Movie Search
            </StyledLink>
            <StyledLink onClick={() => handleAccess(3, "TodoApp")}>
              <FaTasks />
              Todo App
            </StyledLink>
            <StyledLink onClick={() => handleAccess(4, "QuizApp")}>
              <FaRegQuestionCircle />
              Quiz App
            </StyledLink>
            <StyledLink onClick={() => handleAccess(5, "LanguageTranslator")}>
              <FaGlobeAmericas />
              Translator
>>>>>>> a15729691886a11a600d094604c998dad4a4dcda
            </StyledLink>
            <button
              onClick={handleLogout}
              style={{
                marginTop: "20px",
                color: "white",
                backgroundColor: "transparent",
                border: "none",
<<<<<<< HEAD
                textAlign: "start",
=======
>>>>>>> a15729691886a11a600d094604c998dad4a4dcda
              }}
            >
              Logout
            </button>
          </NavBar>
<<<<<<< HEAD
        </>
      )}
      <Suspense fallback={<Loading />}>
        <MainContent>
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? <Carrousell /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/qrcodegen"
              element={
                isAuthenticated ? <QRCodeGenerator /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/quizapp"
              element={isAuthenticated ? <QuizApp /> : <Navigate to="/login" />}
            />
            <Route
              path="/langtradutor"
              element={
                isAuthenticated ? (
                  <LanguageTranslator />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/moviesearch"
              element={
                isAuthenticated ? (
                  <MovieSearchEngine />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/ipaddress"
              element={
                isAuthenticated ? <IPAddressFinder /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/todoapp"
              element={isAuthenticated ? <TodoApp /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={
                !isAuthenticated ? <LoginComponent /> : <Navigate to="/" />
              }
            />
          </Routes>
          {isAuthenticated && (
            <>
              <ReturnButton onClick={handleReturn}>
                <FaArrowLeft /> Return
              </ReturnButton>
            </>
          )}
          {isAuthenticated && (
            <Footer>© 2024 Emerson Penelli | All rights reserved</Footer>
          )}
        </MainContent>
      </Suspense>
=======
          <MainContent>
            {currentComponent ? (
              <>
                {renderComponent()}
                <ReturnButton onClick={handleReturn}>
                  <FaArrowLeft /> Return
                </ReturnButton>
              </>
            ) : (
              <CarouselContainer>
                <CustomCarousel
                  showArrows={true}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={5000}
                  selectedItem={carouselIndex}
                  onChange={(index) => setCarouselIndex(index)}
                >
                  <CarouselItem>
                    <h2>QR Code Generator</h2>
                    <button onClick={() => handleAccess(0, "QRCodeGenerator")}>
                      Acessar
                    </button>
                  </CarouselItem>
                  <CarouselItem>
                    <h2>IP Address Finder</h2>
                    <button onClick={() => handleAccess(1, "IPAddressFinder")}>
                      Acessar
                    </button>
                  </CarouselItem>
                  <CarouselItem>
                    <h2>Movie Search Engine</h2>
                    <button
                      onClick={() => handleAccess(2, "MovieSearchEngine")}
                    >
                      Acessar
                    </button>
                  </CarouselItem>
                  <CarouselItem>
                    <h2>Todo App</h2>
                    <button onClick={() => handleAccess(3, "TodoApp")}>
                      Acessar
                    </button>
                  </CarouselItem>
                  <CarouselItem>
                    <h2>Quiz App</h2>
                    <button onClick={() => handleAccess(4, "QuizApp")}>
                      Acessar
                    </button>
                  </CarouselItem>
                  <CarouselItem>
                    <h2>Language Translator</h2>
                    <button
                      onClick={() => handleAccess(5, "LanguageTranslator")}
                    >
                      Acessar
                    </button>
                  </CarouselItem>
                </CustomCarousel>
              </CarouselContainer>
            )}
            <Footer>© 2024 Your Company | All rights reserved</Footer>
          </MainContent>
        </>
      )}
>>>>>>> a15729691886a11a600d094604c998dad4a4dcda
    </AppContainer>
  );
};

// Exporta o componente App para ser utilizado em outras partes da aplicação.
export default App;
