import React, { useState } from 'react';
import { PageId, InsightArticle } from '../types';
import { insightsArticles } from '../data/insightsData';
import { BookOpen, Clock, Calendar, ArrowRight, X, Share2, CheckCircle2 } from 'lucide-react';

interface InsightsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (service?: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [readingArticle, setReadingArticle] = useState<InsightArticle | null>(null);

  const categories = ['All', 'Healthcare RCM', 'Financial Strategy', 'USA Tax Support', 'Operations', 'Business Intelligence', 'Business Strategy'];

  const filteredArticles = selectedCategory === 'All'
    ? insightsArticles
    : insightsArticles.filter(a => a.category === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
              <BookOpen className="w-4 h-4" />
              <span>Thought Leadership &amp; Operational Briefs</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>RH Business Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Executive Insights &amp; Strategic Perspectives
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              In-depth research and operational strategies on healthcare revenue cycles, multi-state tax compliance support, financial modeling, and business process automation.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Controls - Zero-Pill Discipline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">
            Filter Topics:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <div>
                {/* Clean unboxed text metadata with · separators */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-blue-700">{article.category}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>{article.date}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors mb-3">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setReadingArticle(article)}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenConsultation(`Insight Topic: ${article.title}`)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Consult on this Topic
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Modal Reader for Selected Article */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div 
            className="bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden relative max-h-[90vh] flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="bg-slate-900 text-white px-6 sm:px-8 py-5 flex items-start justify-between border-b border-slate-800 shrink-0">
              <div>
                <div className="flex items-center gap-2 text-xs text-blue-400 mb-1">
                  <span>{readingArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{readingArticle.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{readingArticle.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {readingArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setReadingArticle(null)}
                className="text-slate-400 hover:text-white p-1 rounded-md transition-colors ml-4 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg text-xs sm:text-sm text-blue-950 font-medium italic">
                {readingArticle.summary}
              </div>

              {readingArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-slate-700 text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="mt-8 pt-6 border-t border-slate-200 bg-slate-50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Need Guidance on this Strategy?
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Schedule a conversation with our subject matter experts to evaluate your implementation.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const topic = readingArticle.title;
                      setReadingArticle(null);
                      onOpenConsultation(`Article Follow-up: ${topic}`);
                    }}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider rounded-md whitespace-nowrap"
                  >
                    Discuss With Our Team
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Stay Ahead of Complex Financial &amp; Regulatory Changes
            </h3>
            <p className="text-sm text-slate-300">
              Partner with RH Business Solutions to operationalize these strategies across your practice or enterprise.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Executive Insights')}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors whitespace-nowrap"
          >
            Book Free Consultation
          </button>
        </div>
      </section>

    </div>
  );
};
