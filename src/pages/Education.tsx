import { Helmet } from "react-helmet-async";
import { Calendar, User, ArrowRight, TrendingUp, Building2, DollarSign, Home, PieChart, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const featuredArticle = {
    title: "Commercial Real Estate vs Single Family Homes: A Complete Investment Comparison",
    excerpt: "Understand the key differences between commercial and residential real estate investments, including cash flow, appreciation potential, tenant management, and barrier to entry.",
    author: "Zachary Russell",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Investment Comparison",
    image: "/placeholder.svg"
  };

  const articles = [
    {
      title: "Commercial Real Estate vs Stocks: Risk, Returns, and Portfolio Balance",
      excerpt: "Compare the stability and income potential of commercial real estate against stock market investments, including volatility, liquidity, and diversification benefits.",
      author: "Ethaniel Vu",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Investment Comparison"
    },
    {
      title: "Bonds vs Commercial Real Estate: Fixed Income vs Real Assets",
      excerpt: "Explore how commercial real estate stacks up against bond investments for income generation, inflation protection, and capital preservation.",
      author: "Zachary Russell",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Investment Comparison"
    },
    {
      title: "Single Family Rentals vs Commercial Properties: Scale and Management",
      excerpt: "Learn why commercial properties often provide better economies of scale, professional management, and stronger cash flow than single-family rentals.",
      author: "Ethaniel Vu",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Real Estate Comparison"
    },
    {
      title: "REITs vs Direct Commercial Real Estate Ownership",
      excerpt: "Understand the trade-offs between REIT investments and direct property ownership, including control, tax benefits, and minimum investment requirements.",
      author: "Zachary Russell",
      date: "February 22, 2024",
      readTime: "9 min read",
      category: "Investment Comparison"
    },
    {
      title: "Commercial Real Estate vs Gold and Commodities",
      excerpt: "Compare commercial real estate's inflation hedging properties and income generation against precious metals and commodity investments.",
      author: "Ethaniel Vu",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Investment Comparison"
    },
    {
      title: "Why Commercial Real Estate Outperforms Savings Accounts",
      excerpt: "Learn how commercial real estate provides superior returns, tax advantages, and wealth building potential compared to traditional savings vehicles.",
      author: "Zachary Russell",
      date: "February 8, 2024",
      readTime: "5 min read",
      category: "Investment Education"
    }
  ];

  const categories = [
    { name: "Investment Comparison", count: 12, icon: BarChart3 },
    { name: "Real Estate vs Stocks", count: 8, icon: TrendingUp },
    { name: "Property Types", count: 15, icon: Building2 },
    { name: "Income Generation", count: 10, icon: DollarSign },
    { name: "Risk Analysis", count: 6, icon: PieChart },
    { name: "Tax Benefits", count: 9, icon: Home }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Real Estate Education & Investment Comparisons | AxisPoint Partners</title>
        <meta 
          name="description" 
          content="Learn how commercial real estate compares to stocks, bonds, single family homes, and other investments. Educational resources for smart investment decisions." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-axis">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Investment Education
              </h1>
              <p className="text-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover how commercial real estate compares to other investment types and learn why it's becoming the preferred choice for sophisticated investors.
              </p>
              <Button size="lg" className="btn-institutional">
                Subscribe to Education Updates
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="section-padding">
          <div className="container-axis">
            <div className="text-center mb-12">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Featured Comparison
              </h2>
            </div>

            <Card className="card-institutional max-w-4xl mx-auto">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="secondary">{featuredArticle.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredArticle.date}
                    </div>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-display text-2xl md:text-3xl text-primary mb-4">
                  {featuredArticle.title}
                </CardTitle>
                <CardDescription className="text-body text-lg">
                  {featuredArticle.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="btn-institutional">
                  Read Comparison <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories */}
        <section className="section-padding bg-accent/5">
          <div className="container-axis">
            <div className="text-center mb-12">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Browse by Investment Type
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {categories.map((category, index) => (
                <Card key={index} className="card-institutional text-center cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <category.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-display font-semibold text-primary mb-1 text-sm">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.count} guides
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="section-padding">
          <div className="container-axis">
            <div className="text-center mb-12">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Recent Educational Content
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="card-institutional h-full">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-display text-lg text-primary mb-2 line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-body text-sm line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center text-xs text-muted-foreground gap-3 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                      <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80">
                        Read Guide <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding bg-primary/5">
          <div className="container-axis">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Stay Educated
              </h2>
              <p className="text-body text-lg text-muted-foreground mb-8">
                Get the latest investment comparisons, educational guides, and analysis delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-institutional">
                  Subscribe to Education Updates
                </Button>
                <Button size="lg" variant="outline">
                  View All Guides
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Education;