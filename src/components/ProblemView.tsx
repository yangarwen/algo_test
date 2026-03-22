import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Problem } from '../types';

interface ProblemViewProps {
  problem: Problem;
}

export function ProblemView({ problem }: ProblemViewProps) {
  return (
    <div className="h-full overflow-y-auto p-6 bg-zinc-950 border-r border-zinc-800">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-2xl font-bold text-zinc-100">
            {problem.id}. {problem.title}
          </h1>
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
              problem.difficulty === 'Easy'
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                : problem.difficulty === 'Medium'
                ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
            }`}
          >
            {problem.difficulty}
          </span>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none mb-8">
          <Markdown remarkPlugins={[remarkGfm]}>{problem.description}</Markdown>
        </div>

        <div className="space-y-6">
          {problem.examples.map((example, index) => (
            <div key={index} className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800/50">
              <h3 className="font-semibold text-zinc-100 mb-2">Example {index + 1}:</h3>
              <div className="font-mono text-sm text-zinc-300 space-y-1">
                <div><span className="font-semibold text-zinc-100">Input:</span> {example.input}</div>
                <div><span className="font-semibold text-zinc-100">Output:</span> {example.output}</div>
                {example.explanation && (
                  <div className="mt-2 text-zinc-400">
                    <span className="font-semibold text-zinc-100">Explanation:</span> {example.explanation}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="font-semibold text-zinc-100 mb-3">Constraints:</h3>
          <ul className="list-disc list-inside space-y-1 text-zinc-300 font-mono text-sm bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
            {problem.constraints.map((constraint, index) => (
              <li key={index}>{constraint}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
