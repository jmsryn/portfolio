'use client';

import { motion } from 'framer-motion';
import {
  ArrowLeft, BarChart3, Users, Globe, Eye, TrendingUp, Clock
} from 'lucide-react';
import Link from 'next/link';
import VisitorDashboard from '@/components/VisitorDashboard';

export default function PrivateAnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/20 rounded-xl">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Private Analytics
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Secure portfolio analytics - invitation only
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <VisitorDashboard />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Analytics Features</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Get detailed insights into your portfolio&apos;s performance and visitor behavior
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold">Global Reach</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  See exactly where your visitors are coming from around the world with detailed geographical data.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold">Visitor Insights</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Track unique visitors, total visits, and understand your audience demographics.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold">Real-time Data</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Get up-to-date analytics with real-time visitor tracking and live statistics.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <Eye className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="font-semibold">Privacy Focused</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  IP logging with geolocation data while respecting user privacy and avoiding bot traffic.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900 rounded-lg">
                    <Clock className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="font-semibold">Historical Data</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Access historical visitor data with timestamps and detailed visit information.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="font-semibold">Visual Analytics</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Beautiful charts and graphs to visualize your portfolio&apos;s global impact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
