import React, { useState, useEffect, useRef } from 'react';
import { ProblemView } from './components/ProblemView';
import { ChatView } from './components/ChatView';
import { problems } from './data/problems';
import { getTutorResponse } from './services/gemini';
import { Message } from './types';
import { BookOpen, Code2, Menu, X } from 'lucide-react';

export default function App() {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const problem = problems[currentProblemIndex];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<'problem' | 'chat'>('problem');
  const [leftWidthPercent, setLeftWidthPercent] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      content: `歡迎來到演算法訓練營！我是你的專屬演算法導師。在這裡，我們不急著寫 code，而是專注於**拆解問題**與**邏輯思考**。\n\n我們從最經典的基礎題開始，這題能很好地鍛鍊你對資料結構的直覺。\n\n現在，請告訴我針對這題「${problem.title}」你的**直覺思路**是什麼？如果你是一台電腦，你會怎麼一步步找出這兩個數字？（請用文字描述或步驟拆解，先不要寫程式碼喔！）`,
      timestamp: Date.now(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      const responseText = await getTutorResponse(problem, messages, content);
      
      const newModelMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: responseText,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, newModelMessage]);
    } catch (error: any) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'model',
          content: `抱歉，導師目前遇到了一點技術問題，請稍後再試。\n\n**錯誤細節**：${error?.message || '未知錯誤'}`,
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      let newPercent = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      newPercent = Math.max(20, Math.min(newPercent, 80)); // Clamp between 20% and 80%
      setLeftWidthPercent(newPercent);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = 'none'; // Prevent text selection while dragging
    } else {
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
    };
  }, [isDragging]);

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100 overflow-hidden font-sans relative">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm" 
          onClick={() => setIsSidebarOpen(false)} 
        />
      )}

      {/* Sidebar / Navigation */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-zinc-900 border-r border-zinc-800 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64 flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b border-zinc-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white">
              <Code2 size={20} />
            </div>
            <span className="font-bold text-white tracking-wide">AlgoTutor Pro</span>
          </div>
          <button 
            className="md:hidden text-zinc-400 hover:text-white p-1"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
            Problem List
          </div>
          <div className="space-y-2">
            {problems.map((p, index) => (
              <button
                key={p.id}
                onClick={() => {
                  setCurrentProblemIndex(index);
                  setMessages([
                    {
                      id: Date.now().toString(),
                      role: 'model',
                      content: `我們來挑戰第 ${p.id} 題：「${p.title}」。\n\n請告訴我你的直覺思路是什麼？`,
                      timestamp: Date.now(),
                    },
                  ]);
                  setIsSidebarOpen(false);
                  setMobileTab('problem');
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-3 ${
                  index === currentProblemIndex
                    ? 'bg-indigo-500/20 text-indigo-300 font-medium'
                    : 'hover:bg-zinc-800 hover:text-zinc-100 text-zinc-400'
                }`}
              >
                <BookOpen size={16} className={index === currentProblemIndex ? 'text-indigo-400' : 'text-zinc-500'} />
                <span className="truncate">{p.id}. {p.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-3 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-md z-30">
          <button 
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={20} />
          </button>
          
          <div className="flex bg-zinc-950/50 rounded-lg p-1 border border-zinc-800">
            <button 
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${mobileTab === 'problem' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`} 
              onClick={() => setMobileTab('problem')}
            >
              題目描述
            </button>
            <button 
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${mobileTab === 'chat' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`} 
              onClick={() => setMobileTab('chat')}
            >
              導師對話
            </button>
          </div>
          
          <div className="w-9"></div> {/* Spacer for centering */}
        </div>

        {/* Content Panels */}
        <div ref={containerRef} className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
          {/* Drag Overlay to prevent iframe pointer capture */}
          {isDragging && <div className="fixed inset-0 z-50 cursor-col-resize" />}

          {/* Left Panel: Problem Description */}
          <div 
            className={`w-full overflow-hidden ${mobileTab === 'problem' ? 'h-full block md:h-auto' : 'hidden md:block'}`}
            style={isDesktop ? { width: `${leftWidthPercent}%`, flexShrink: 0 } : {}}
          >
            <ProblemView problem={problem} />
          </div>

          {/* Draggable Divider (Desktop only) */}
          <div 
            className={`hidden md:flex w-1.5 bg-zinc-900 border-x border-zinc-800 cursor-col-resize items-center justify-center hover:bg-indigo-500/50 transition-colors z-10 ${isDragging ? 'bg-indigo-500/50' : ''}`}
            onMouseDown={() => setIsDragging(true)}
          >
            <div className="h-12 w-0.5 bg-zinc-600 rounded-full" />
          </div>

          {/* Right Panel: Chat Interface */}
          <div className={`w-full overflow-hidden flex-1 ${mobileTab === 'chat' ? 'h-full block md:h-auto' : 'hidden md:block'}`}>
            <ChatView
              messages={messages}
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
